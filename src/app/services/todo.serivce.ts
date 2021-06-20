import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient){
    }


    public getTasks(): Observable<any>{

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('X-Api-Key', 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c');
        let requestUrl = 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/get';
        return this.http.get(requestUrl, {responseType: 'json', headers});
    }

    public updateTask(task: any): Observable<any>{

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('X-Api-Key', 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c');

        let requestBody = task;

        let requestUrl = 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/patch/' + task.id;
        return this.http.patch(requestUrl, requestBody, {responseType: 'json', headers});
    }



}