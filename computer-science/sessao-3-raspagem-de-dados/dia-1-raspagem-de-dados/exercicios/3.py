import requests


URL = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'
response = requests.get(URL).headers
print(response)
