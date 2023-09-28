########################################################! Backend ########################################################


# Lancement du server
symfony_server_start:
    @echo "🚀 Lancement du server..."
    (cd back_end && symfony server:start -d)

########################################################! Frontend ########################################################


# Démarrer le server
react_server_start:
    @echo "🚀 Démarrage du server.."
    (cd front_end && npm run start)

########################################################! Commandes installation ########################################################

# Lancement des serveurs :
start_server:
    @echo "🚀 Démarrage des serveurs back et front..."
    just symfony_server_start
    just react_server_start
