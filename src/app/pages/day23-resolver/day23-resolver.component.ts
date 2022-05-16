import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day23-resolver',
  templateUrl: './day23-resolver.component.html',
  styleUrls: ['./day23-resolver.component.scss']
})
export class Day23ResolverComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data['user'];
  }

}
