## Configurações

### Windows

1. Instale Python:
- Acesse https://www.python.org/downloads/ e clique em Download Python
- Depois de instalado, acesse o Prompt de comando pressionando a teclado do Windows + X e selecionando a opção Prompt de comando. Pesquise como abrir o Prompt de comando se isso não funcionar.
- Escreva `py --version` para saber a versão Python instalada.

2. Instale pip:
- Escreva `py get-pip.py` no Prompt de comando.

3. Crie um ambiente virtual:
- Abra uma nova janela de Prompt de comando
- Vá até a pasta onde quer que o ambiente virtual fique. Faça isso escrevendo `cd` e o nome da pasta em seguida, por exemplo, `cd Documentos`.
- Escreva `py -m venv pi-um`. Que criará uma pasta chamada __pi-um__ e o ambiente virtual.
- Para ativar o ambiente virtual escreva `pi-um\Scripts\activate.bat`.

4. Instale Django:
- Na mesma janela de Prompt de comando usada para ativar o ambiente virtual escreva `py -m pip install Django`.
- Depois da instalação escreva `django-admin --version` para saber a versão Django instalada.

#### Referencia
https://docs.djangoproject.com/en/3.2/howto/windows/

## MacOS ou Linux
1. Instale Python:
- Abra uma nova janela de terminal e escreva `brew install python3`.

2. Instale pip:
- `sudo easy_install pip`.

3. Crie um ambiente virtual:
- `sudo pip install virtualenv`.
- `virtualenv pi-um`.
- `cd pi-um`
- `source bin/activate`

4. Instale Django:
- `sudo pip install django`
- `python -m django --version`

#### Referencia
https://appdividend.com/2018/03/28/how-to-install-django-in-mac/

## Instalando e executando este projeto:
- Acesse a pasta `pi-um` pelo Prompt de comando usando `cd`.
- `git clone https://github.com/anabeatrizzz/pi-um-univesp.git`.

Estas ultimas linhas devem ser executadas toda vez que necessitar acessar o projeto:
- `cd pi-um-univesp`.
- Executando o servidor: `python manage.py runserver`.
- Acesse http://127.0.0.1:8000/

## O que cada pasta representa
__frontend-pi-um__: Guarda todos os arquivos relacionados ao framework web React.
__pi-um-univesp__: Guarda todos os arquivos relacionados ao framework Django.
