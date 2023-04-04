class Calculadora:
    def soma(self, x, y):
        return x + y
    

class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converter_numero(self, numero):
        if not isinstance(numero, str):
            return numero
        
        # Neste cenário, em vez de fazermos IF e else... podemos usar o dicionário
        # conseguimos acessar obter o valor a partir da chave
        return {
            "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5,
            "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10,
        }.get(numero)
    
    def soma(self, x, y):
        return self.calculadora.soma(
            self.converter_numero(x), self.converter_numero(y)
        )
    

class DecoratedCalculator:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def convert_number(self, number):
        if not isinstance(number, str):
            return number

        return {
            "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
            "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        }.get(number)
    
    def soma(self, x, y):
        return self.calculadora.soma(
            self.convert_number(x), self.convert_number(y)
        )

    

if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =")
    print(calculadora.soma(10, 20))

    calculadoraDecorada = CalculadoraDecorada(calculadora)
    print("'oito' + 'dois' =", calculadoraDecorada.soma("oito", "dois"))

    decorated_calculator = DecoratedCalculator(calculadora)
    print("'two' + 'seven' =", decorated_calculator.soma("two", "seven"))