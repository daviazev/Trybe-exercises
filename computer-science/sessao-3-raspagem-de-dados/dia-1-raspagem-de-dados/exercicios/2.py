# Exercício 2:
# Faça uma requisição ao recurso usuários da API do Github (https://api.github.com/users), 
# exibindo o username e url de todos os usuários retornados.


import requests
import json


URL = 'https://api.github.com/users'
response = requests.get(URL).text
response = json.loads(response)

for obj in response:
    print(obj["login"] + ' ' + obj["html_url"])
