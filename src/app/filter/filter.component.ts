import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  @Input() all = 0;
  @Input() premium = 0;
  @Input() free = 0;

  selectedRadioButtonValue: string = "all";

  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  

  onFilterOptionChange(){
    this.filterChange.emit(this.selectedRadioButtonValue);  
  }

}
