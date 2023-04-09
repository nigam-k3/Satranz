import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';
import { NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;

  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
  }
  reset() {
    this.board.reset();
  }
  reverse() {
    this.board.reverse();
  }
  undo(){
    this.board.undo();
  }
  getMoveHistory(){
    const data =  this.board.getMoveHistory();
    console.log(data);
    
  }
}
