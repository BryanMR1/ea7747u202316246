import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

*/
@Component({
  selector: 'app-reservartion-summary',
  imports: [MatCardModule, DatePipe],
  templateUrl: './reservation-summary.html',
  styleUrl: './reservation-summary.css'
})
export class ReservationSummary {
  readonly report = input.required<ReservartionItem>();
}
