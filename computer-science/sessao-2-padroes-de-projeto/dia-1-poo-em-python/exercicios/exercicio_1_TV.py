class TV:
    def __init__(self, volume=0, canal='trybe TV', tamanho='40', ligada=True) -> None:
        self.__volume = volume
        self.__canal = canal
        self.__tamanho = tamanho
        self.__ligada = ligada

    def aumentar_volume(self) -> None:
        if (self.__volume < 99):
            self.__volume += 1
        else: 
            print("Volume máximo atingido")
        print(f'volume: {self.__volume}')
    
    def diminuir_volume(self) -> None:
        if (self.__volume > 0):
            self.__volume -= 1
        else: 
            print("Volume mínimo atingido")
        print(f'volume: {self.__volume}')
        
    
    def modificar_canal(self, canal: str) -> None | ValueError:
        lista_de_canais = ['Trybe TV', 'Davi TV', 'Manual do Mundo', 'Flow']
        if (canal in lista_de_canais):
            self.__canal = canal
        else:
            raise ValueError('O canal não existe!')
        print(f'canal: {self.__canal}')
        
    def ligar_desligar(self) -> None:
        self.__ligada = not self.__ligada
        print(f'TV está ligada?: {self.__ligada}')

    def tv_infos(self):
        print(f'TV está ligada?: {self.__ligada}')
        print(f'canal: {self.__canal}')
        print(f'volume: {self.__volume}')
        

tv = TV(1, 'ssaas', '12', False)
print(tv.tv_infos())
