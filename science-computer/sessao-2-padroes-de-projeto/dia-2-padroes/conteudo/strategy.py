class DebitoAutomatico:
    @classmethod
    def debitar(self, conta, valor, banco):
        if banco == "itau":
            # Codigo específico do Itaú (exemplo)
            # connect_server_udp(itau_line)
            # itau_line.check_system()
            # itau_zig_zag(valor, 'Token 454')
            print("Débito realizado pelo Itau")
        elif banco == "Santander":
            # Codigo específico do Santander (exemplo)
            # connect_server_tcp(santander_line)
            # santander_line.check_ping()
            # metodo_106(valor)
            print("Santander, Débito efetuado!")
        elif banco == "Bradesco":
            # Codigo específico do Bradesco (exemplo)
            print("Sucesso!")
        # ... + 150 bancos...
        elif banco == "Caixa":
            # Codigo específico da Caixa (exemplo)
            print("Efetuado com sucesso, Caixa Agradece!")


DebitoAutomatico.debitar(120, 123, "itau")
DebitoAutomatico.debitar(110, 456, "Santander")
DebitoAutomatico.debitar(120, 789, "Bradesco")

# Como melhorar o código? Que estratégia utilizar? É hora de pensar…

# Podemos observar que a classe está enorme, afinal, ela possui muitas responsabilidades já que cada banco possui uma estratégia. Que tal começar criando um Objeto/Classe para cada banco? Como possuem similaridades, é possível respeitar uma única interface — por exemplo, todos possuírem um método debitar().

from abc import ABC, abstractmethod


class BancoStrategy(ABC):  # Interface
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError


class ItauStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Itau (exemplo)
        print("Débito realizado pelo Itau")


class SantanderStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Santander (exemplo)
        print("Santander, Débito efetuado!")


class BradescoStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Bradesco (exemplo)
        print("Sucesso!")

# ... métodos para todos os bancos


# As classes foram colocadas juntas no mesmo arquivo como forma de facilitar a visualização. Considere que cada uma já pode estar em seu respectivo arquivo.

# O último passo será criar a classe Banco, que receberá como parâmetro a estratégia escolhida:


from itau_strategy import ItauStrategy
from santander_strategy import SantanderStrategy
from bradesco_strategy import BradescoStrategy


class Banco:
    def __init__(self, banco_strategy):
        self.__banco_strategy = banco_strategy

    def debitar(self, conta, valor):
        self.__banco_strategy.debitar(conta, valor)

Banco(ItauStrategy).debitar(120, 123)
Banco(SantanderStrategy).debitar(110, 456)
Banco(BradescoStrategy).debitar(120, 789)

# Como vimos, é possível transformar um código enorme em códigos menores e organizados. Com isso:

# Facilita-se, e muito, a manutenção, pois se um banco parar de funcionar, não afeta o todo (baixo acoplamento).
# Permite-se a adição e exclusão de novos bancos com maior facilidade.
# Tem-se um menor número de conflitos no Git, já que não é um arquivo único.
# Mais pessoas programadoras podem trabalhar no mesmo código.
# O código fica melhor em legibilidade, logo é melhor entendido pelas pessoas.
# Fica aberto para extensão e fechado para alteração (SOLID Open/Closed Principle).
