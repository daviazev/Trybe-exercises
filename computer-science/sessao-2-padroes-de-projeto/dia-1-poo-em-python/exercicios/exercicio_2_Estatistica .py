class Estatistica:
    def __init__(self, lista_de_numeros = []) -> None:
        self.lista_de_numeros = lista_de_numeros

    @classmethod
    def calc_media(self, lista):
        if lista:
            return sum(lista) / len(lista)
        else:
            raise ValueError('Lista não definida')
        
    
estat = Estatistica()

print(estat.calc_media([1, 10])) # 5.5
print(estat.calc_media([])) # ValueError('Lista não definida'