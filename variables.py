import firebase_admin
from flask import Flask, render_template, request, redirect, session
from jinja2 import Template, Environment, FileSystemLoader
from firebase_admin import credentials, firestore
import pyrebase
import json

cred = credentials.Certificate("basr-d0079-firebase-adminsdk-8sa6v-c2c7174123.json")
firebase_admin.initialize_app(cred)
app = Flask(__name__)
app.secret_key = "test"
with open("fb_config.json") as json_data:
    data = json.load(json_data)
fb = pyrebase.initialize_app(data)
auth = fb.auth()
db = firestore.client()