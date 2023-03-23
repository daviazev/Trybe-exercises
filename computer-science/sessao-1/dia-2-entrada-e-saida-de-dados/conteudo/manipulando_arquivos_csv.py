# O formato CSV (Comma Separated Values) é muito comum em exportações de planilhas de dados e base de dados. Foi utilizado por muito tempo antes de sua definição formal, o que gerou uma despadronização deste formato e o surgimento de vários dialetos.

# Cada dialeto tem seus próprios delimitadores e caracteres de citação, porém o formato geral é semelhante o suficiente para utilizarmos o mesmo módulo para este processamento.

# Ainda que seu nome indique que o delimitador seja a “,“ (vírgula), existem variações que utilizam “;“ (ponto e vírgula) ou até mesmo tabulações (“\t“).

# 🎲 Sem dúvidas, análise de dados é o que se destaca quando estamos falando sobre manipular arquivos CSV. 
# link: https://lms-assets.betrybe.com/lms/graduacao_unb.csv

# Vamos analisar uma base de dados a respeito dos cursos de graduação oferecidos pela Universidade de Brasília (UnB). O arquivo utilizado é o graduacao_unb.csv.

# 💡 Para fazer o exemplo, cole o arquivo graduacao_unb.csv na raiz do diretório em que estará o seu script.

# O módulo csv, contém duas principais funções:

# Um leitor (reader) que nos ajuda a ler o conteúdo, já fazendo as transformações dos valores para Python;

# E um escritor (writer) para facilitar a escrita nesse formato.




"""
import csv

with open("graduacao_unb.csv", encoding = 'utf-8') as file:
    graducacao_reader = csv.reader(file, delimiter=',', quotechar='"')
    header, *data = graducacao_reader


# O leitor define como dialeto padrão excel, o que significa dizer que o delimitador de campos será “,“ e o caractere de citação será aspas duplas ("). Uma forma de modificar estes padrões é definindo-os de forma diferente na criação do leitor. Além disso, o leitor irá usar o decodificador padrão do sistema para decodificar em unicode o arquivo .csv. Para utilizar um decodificador diferente, deve ser passado o argumento encoding com o valor do decodificador esperado. Um leitor de .csv pode ser percorrido utilizando o laço de repetição for e, a cada iteração, retorna uma nova linha já transformada em uma lista Python com seus respectivos valores.

# Podemos fazer uma análise e verificar quantos cursos são ofertados por departamento. Em seguida salvamos o resultado também no formato .csv:

group_by_department = {}

for row in data:
    department = row[15]
    if department not in group_by_department:
        group_by_department[department] = 0
    group_by_department[department] += 1

with open("department_report.csv", 'w', encoding='utf-8') as file:
    writer = csv.writer(file)

    headers = [
        "Departamento",
        "Total de cursos",
    ]
    writer.writerow(headers)

    for deparment, grades in group_by_department.items():
        row = [
            deparment,
            grades
        ]
        writer.writerow(row)

"""

# Existem ainda o leitor e o escritor baseados em dicionários. A principal vantagem é que não precisamos manipular os índices para acessar os dados das colunas. A desvantagem é o espaço ocupado em memória (que é maior que o comum), devido à estrutura de dados utilizada.


import csv

with open("graduacao_unb.csv", encoding='utf-8') as file:
    graduacao_reader = csv.DictReader(file, delimiter=',', quotechar='"')

    group_by_department = {}
    for row in graduacao_reader:
        department = row['unidade_responsavel']
        if department not in group_by_department:
            group_by_department[department] = 0
        group_by_department[department] += 1


with open("new_department_report.csv", "w", encoding="utf-8") as file:
    headers = [
        "Departamento", 
        "Total de Cursos"
    ]

    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()

    for department, grades in group_by_department.items():
        row = {"Departamento": department, "Total de Cursos": grades}
        writer.writerow(row)