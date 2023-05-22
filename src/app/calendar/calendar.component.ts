import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  currentDate!: Date;
  daysInMonth!: number[];
  selectedDay!: number;

  constructor() {}

  ngOnInit() {
    this.currentDate = new Date();
    this.daysInMonth = this.getDaysInMonth(this.currentDate);
  }

  getDaysInMonth(date: Date): number[] {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
  }

  selectDay(day: number) {
    this.selectedDay = day;
  }
}
