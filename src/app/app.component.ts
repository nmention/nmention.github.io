import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
// Ici on crée et déclare 3 variables pour les relier aux enfants
export class AppComponent implements OnInit {
// resultat API de movie data base
item: any;
// token d'accès pour l'api movie data base
accessToken: string;
constructor(private service:PostService, private route: ActivatedRoute) {
  this.accessToken = ''
}
ngOnInit() {
this.route.queryParams.subscribe(params => {
if (params['code'] !== '') {
this.accessToken = params['code']
}
})
}
// Voici la fonction qui récupère toutes les infos des api enappelant le service
getDataFromAPI(formQuery: any) {
if (!(formQuery === '') && this.accessToken !== '') {
// ici le subcribe va servir à suivre le changement de reponse donnée par le service
this.service.getPosts(formQuery).subscribe(response => {this.item = response;
});
}
}
}