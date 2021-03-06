// @ts-ignore
import { Injectable } from '@angular/core';
import {environment as env} from './../../environments/environment';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import { map } from 'rxjs/operators';
// @ts-ignore
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRecipeService {
  //giving api url with our cliend id and client secret keys and adding endpoints
  public FOURSQUARE_API_URL = `https://api.foursquare.com/v2/venues/explore?client_id=${env.CLIENT_ID}&client_secret=${env.CLIENT_SECRET}&v=20180323&near=`;
  
  constructor(private http:HttpClient) { }

  getVenueByItem(placeName: String, recipeName: String): Observable<any[]> {
    const url = this.FOURSQUARE_API_URL + placeName + `&query=${recipeName}`;
    return this.http.get(url).pipe(map(venues => {
      return venues['response'].groups[0].items;
    }))
  }

  getRecipes(recipeName:String): Observable<any>  {
    //giving api url with our app id and app key along with giving recipe name and adding endpoints and getting data from that
    const EDAMAM_API_URL = `https://api.edamam.com/search?q=${recipeName}&app_id=${env.APP_ID}&app_key=${env.APP_KEY}`;
    return this.http.get(EDAMAM_API_URL).pipe(map(e => e['hits']))
  }
}
