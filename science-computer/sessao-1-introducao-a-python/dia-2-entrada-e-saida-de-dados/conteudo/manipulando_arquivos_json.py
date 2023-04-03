# JSON é um formato textual muito utilizado para integração de sistemas. Ele é baseado em um subconjunto de regras JavaScript, embora seja independente de linguagem.

# Por sua legibilidade e tamanho (é bem leve), além da facilidade de leitura e escrita por seres humanos e máquinas, vem sendo bastante utilizado na web e para troca de informações entre sistemas.

# Alguns exemplos de utilização incluem comunicação back-end e front-end, e comunicação com sistemas externos (gateways de pagamento, por exemplo) ou internos (como um sistema de autenticação).

# A linguagem Python já inclui um módulo para manipulação desse tipo de arquivo e seu nome é json.


# Seus principais métodos para manipulação são: load, loads, dump, dumps.

# 🐭 Para demonstrar como é feita a manipulação de arquivos JSON, vamos utilizar o arquivo pokemons.json que é uma lista de pokemons com suas informações chave.
# link: https://lms-assets.betrybe.com/lms/pokemons.json

# 💡 Para fazer o exemplo, coloque o arquivo pokemons.json no mesmo diretório em que estará o seu script. (arquivo pokemons.json)

import json

with open("pokemons.json") as file:
    # content = file.read()
    pokemons = json.load(file)['results']

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)

print(pokemons[0])