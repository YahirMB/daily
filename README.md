#Tecnologies for working
```bash
node
git
android studio
jdk11 y superior
mysql
```

#Iniciar proyecto

First step
```bash
# Configurar entorno de trabajo
 correr este comando en power shell como administrador "Get-ExecutionPolicy " y si te sale "Restricted" entonces corres este comado "Set-ExecutionPolicy AllSigned" o "Set-ExecutionPolicy Bypass -Scope Process"
#Depues de eso
correr este "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
```
Second step 

```bash
# Verificar variables de entorno
si tienes la varibale de entorno el la cuenta de usuario vas bien
Variable ANDROID_HOME
value = C:\Users\Yahir\AppData\Local\Android\Sdk

si tiene la variable de entorno el la cuenta de usuruario el la ruta path vas bien
path > value = C:\Users\Yahir\AppData\Local\Android\Sdk
```

Third step 

```bash
# Clonar repo
git clone "url del repo"
npm i for nodemodules
```
