import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  apiInfo!: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((res: any) => {
      console.log(res);
      this.apiInfo = res
      console.log(this.apiInfo);
    });
  }

}
