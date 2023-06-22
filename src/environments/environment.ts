export const environment = {
  production: false,
  endPoint: "https://localhost:7210/API/",
  urlLogin: 'https://portal.upds.edu.bo/web/SAADS/DEV/Login/SAADS-WEB?returnUrlLogin=http://localhost:4200/%23/login',
  urlAccess: 'https://portal.upds.edu.bo/api/dev/access/api/',
  urlFile: 'https://portal.upds.edu.bo/gapi/upload/uploadasynccontainer/portal-notificacion',
  apikey: "5SJE8rmwaw4rKz",
  objModNotificaciones: {
    id: 34002,
    nombre: "Noticias",
    estado: true,
    interfaces: [
      {
        "id": 41004,
        "titulo": "Notificaciones",
        "descripcion": " ",
        "ubicacion": "notice",
        "enlaceTutorial": null,
        "tipo": 1,
        "idModulo": 34002,
        "icono": "pi-align-left",
        "estado": true,
        "tareas": [
          {
            "id": 40675,
            "nombre": "CREAR",
            "descripcion": "CREAR",
            "idInterface": 41004,
            "tipo": 1
          },
          {
            "id": 40676,
            "nombre": "EDITAR",
            "descripcion": "EDITAR",
            "idInterface": 41004,
            "tipo": 3
          },
          {
            "id": 40677,
            "nombre": "ELIMINAR",
            "descripcion": "ELIMINAR",
            "idInterface": 41004,
            "tipo": 4
          },
          {
            "id": 40678,
            "nombre": "LEER",
            "descripcion": "LEER",
            "idInterface": 41004,
            "tipo": 2
          },
          {
            "id": 40679,
            "nombre": "TODO",
            "descripcion": "LEER",
            "idInterface": 41004,
            "tipo": 5
          }
        ]
      }]
  }
};