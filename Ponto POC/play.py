import requests
requests.packages.urllib3.disable_warnings()
from pprint import pprint
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

def get():
	return requests.get('https://dbc-overflow.firebaseio.com/bin.json', verify=False).json()

def push():
	return requests.put(url='https://dbc-overflow.firebaseio.com/bin.json', data='{"bin": 0}', verify=False)

def do():
	driver = webdriver.Firefox()
	driver.get('http://www.google.com.br')

	#locate
	search_box = driver.find_element_by_id('lst-ib')
	search_button = driver.find_element_by_xpath("//button[@aria-label='Pesquisa Google']")

	#interact
	search_box.send_keys('ha ha ha')
	search_button.click()

while 1==1:
	sleep(1)
	n = get()['bin']
	print 'listening... {}'.format(n)
	if n == 1:
		do()
		push()
		print 'Done.'




