import { Component, OnInit, ViewChild  , AfterViewInit} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.scss']
})
export class ViewExpenseComponent implements OnInit  {
  expenseList: any[] = [];
  constructor(private auth: AuthService) { }

  ngOnInit() {
      this.auth.getExpensesByGroupId().subscribe((data: any[]) => {
        this.expenseList = data;
    });
  }


}

