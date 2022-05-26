from datetime import datetime
from variables import *

@app.route('/', methods=["GET","POST"])
def index():
    login = "block"
    reg = "none"
    error = ""
    if request.method == 'POST':
        if 'login' and 'password' in request.form:
            log = request.form["login"]
            pas = request.form["password"]
            try:
                user = auth.sign_in_with_email_and_password(log,pas)
                if auth.get_account_info(user['idToken'])['users'][0]['emailVerified']:
                    session["user"] = log
                else:
                    error = "Подтвердите почту"
            except Exception as err:
                if json.loads(err.args[1])['error']['message'] == "INVALID_PASSWORD":
                    error = "Неверный пароль" 
                elif json.loads(err.args[1])['error']['message'] == "INVALID_EMAIL":
                    error = "Аккаунта с такой почтой не существует"
        elif 'form' in request.form:
            if 'user' in session: db.collection('Выходы').document(session['user']).update({"veryfied":True})
        elif 'reason' and 'indoor_datetime' and 'outdoor_datetime' in request.form:
            reason = request.form["reason"]
            indoor_datetime = request.form["indoor_datetime"].replace("T"," ")
            outdoor_datetime = request.form["outdoor_datetime"].replace("T"," ")   
            if 'user' in session: db.collection('Выходы').document(session['user']).update({"reason": reason,"indoor_datetime":indoor_datetime,"outdoor_datetime":outdoor_datetime, "veryfied": False})
        elif 'logout' in request.form:
            if 'user' in session: session.pop('user')
        elif 'reg_point' in request.form:
            reg = "block"
            login = "none"
        elif 'login_point' in request.form:
            login = "block"
            reg = "none"
        elif 'name' and 'secname' and 'room' and 'logi' and 'passwor' in request.form:
            #напиши тут try навсякий
            user = auth.create_user_with_email_and_password(request.form['logi'],request.form['passwor'])
            auth.send_email_verification(user['idToken'])
            db.collection('Ученики').document(request.form["logi"]).set({"name":request.form["name"],"secname":request.form['secname'],"room":request.form['room']})
            db.collection('Выходы').document(request.form["logi"]).set({"indoor_datetime":"","outdoor_datetime":"","reason":"","veryfied": False})
    if 'user' in session:
        disabled = ""
        color = "#E95420"
        text = "Отметиться"
        args = db.collection('Выходы').document(session["user"]).get().to_dict()
        if args["veryfied"] == True: 
            text = "Отмечен"
            disabled = "disabled"
            color = "#e97e58"
        return render_template('index.html',display_out="block", display_login="none", display_reg="none",outdoor_datetime=args["outdoor_datetime"],where=args["reason"], marked=text, disabled=disabled, color = color)
    else:
        return render_template('index.html',display_out="none", display_login=login, display_reg=reg,error=error)

app.run(host='0.0.0.0', port=3000)