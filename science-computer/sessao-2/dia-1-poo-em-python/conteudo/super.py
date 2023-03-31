# Super - super maneiro
# Um método pode chamar um outro método já declarado na superclasse da seguinte maneira:

class A:
    def faz_algo(self, valor):
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente

        # A.faz_algo(self, valor=1) ## faz mesma coisa que a linha abaixo!
        super().faz_algo(valor=1)


b = B()
b.faz_outra_coisa()
# Vou printar o valor pelo método criado em A
# 1