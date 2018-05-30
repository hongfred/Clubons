# Clubons
Projet LO10 - P18
Membres :
- Fr�d�ric Hong
- Nicolas Cadot
- Mohamed Reda Benallal Akhdar

# API utilis�es : 
1. Facebook API : https://developers.facebook.com/
----> Récupération des évènements de la page Facebook du Clubons grâce à l'API Graph : https://developers.facebook.com/docs/graph-api/using-graph-api
----> Exemple de son utilisation en php : https://xuxu.fr/2016/06/22/recuperer-les-evenements-dune-page-facebook-avec-graph-api/

2. Instagram API : https://www.instagram.com/developer/
----> Récupérer les photos récentes sur le compte Clubons (20 dernières) : https://www.instagram.com/developer/endpoints/users/
Eléments de réponse : https://stackoverflow.com/questions/27316565/instagram-api-how-can-i-get-all-users-pictures

3. Google Calendar API : https://developers.google.com/calendar/overview 
----> Ajout d'un (ou plusieurs) évènement du Clubons (précédement récupéré via Facebook) dans le calendrier google d'un utilisateur : https://developers.google.com/calendar/create-events

4. Google Maps API : https://developers.google.com/maps/documentation/javascript/adding-a-google-map
----> Créer une carte avec un marqueur pour le lieu de l'évènement (que l'on récupère via les évènements Facebook) : https://developers.google.com/maps/documentation/javascript/adding-a-google-map

5. Buck'UTT API : A voir avec l'�quipe Buck'UTT (on sait pas trop, paiement difficile à mettre en place)

# Design patterns :
- Asynchronous Response Handler : http://www.servicedesignpatterns.com/WebServiceInfrastructures/AsyncResponseHandlerit
(validé, on utilise de base javascript qui est un lnaguage asynchrone)

- Request/Acknowledge : http://www.servicedesignpatterns.com/ClientServiceInteractions/RequestAcknowledge
On a pas de gros traitement de données, donc peut être en trouver un autre?

- Datasource Adapter : http://www.servicedesignpatterns.com/WebServiceImplementationStyles/DatasourceAdapter
on a une couche d'abstraction avec les frameworks que l'ont peut utiliser. donc essayer de bien détailler ça.
Il nous a dit de regarder plus en détail webservice.

- Idempotent Retry : http://www.servicedesignpatterns.com/WebServiceInfrastructures/IdempotentRetry
on peut l'utiliser pour éviter les doublons lors de la création d'évènement (par exemple, la connection internet qui saute, et donc quand le service reprend, ça peut faire des doublons)

# Language envisag�es :
- Front end : React, Redux, Bootstrap
- Back end : NodeJS, ExpressJS, MySQL

////////////////////////////////////////////////////////////////
