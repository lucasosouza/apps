#This is the library that is going to hold the main methods
#version 1.0 completed, with signature

import requests
from json import loads, dumps
from time import sleep
import parser
import subprocess
import os
from hashlib import md5

code_remote = os.environ['CODE_REMOTE']
bin_1 = 'https://dbc-overflow.firebaseio.com/bin/bin-1.json'
response_bin_1 = 'https://dbc-overflow.firebaseio.com/bin/response-1.json'
request_bin_1 = 'https://dbc-overflow.firebaseio.com/bin/request-1.json'
signature_bin_1 = 'https://dbc-overflow.firebaseio.com/bin/signature-1.json'

def code(text):
	return md5(code_remote + text).hexdigest()

def get(url):
	return requests.get(url).text

def post(url, data):
	return requests.put(url, data=data).text

def ask(command):
	post(bin_1, '1')
	post(signature_bin_1, dumps(code(command)))
	print post(request_bin_1, dumps(command))

def master_server(n):
	bin = eval('bin_' + str(n))
	response_bin = eval('response_bin_' + str(n))
	print 'Master listening ...'
	while 1 == 1:
		sleep(1)
		switch = get(bin)
		if switch == '3':
			print '####### Response ######'
			print loads(get(response_bin))
			post(bin, '0')

def slave_server(n):
	bin = eval('bin_' + str(n))
	request_bin = eval('request_bin_' + str(n))
	response_bin = eval('response_bin_' + str(n))
	signature_bin = eval('signature_bin_' + str(n))
	print 'Slave listening ...'
	while 1 == 1:
		sleep(1)
		switch = get(bin)
		if switch == '1':
			post(bin, '2')
			signature = loads(get(signature_bin))
			command = loads(get(request_bin))
			if signature == code(command):
				execute(command, response_bin)
			else:
				post(response_bin, dumps('Invalid signature'))
			post(bin, '3')

def execute(command, response_url):
	try:
		print "####### Received ######"
		print command
		print "####### Response ######"
		response = subprocess.check_output(command, shell=True)
		if response:
			print post(response_url, dumps(response))
		else:
			print post(response_url, dumps('No response'))
	except BaseException as error:
		error_message = "Shit happened: {}".format(error)
		print post(response_url, dumps(error_message))

stages = {
	0: 'non-operant',
	1: 'command sent by master',
	2: 'command received by slave. validating',
	3: 'response sent by slave'
}
