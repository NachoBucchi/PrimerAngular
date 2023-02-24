import { Component, OnInit } from '@angular/core';
import { Player } from '../../_interfaces/player.interface';
import { Team } from '../../_interfaces/team.interface';
import PLAYERS from '../../../assets/data/players.json';
import TEAMS from '../../../assets/data/teams.json';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss'],
})
export class EquiposComponent implements OnInit{
  name: string = 'Bokita';
  status: boolean = false;
  // player:string = "Sergio";

  players: Player[];
  teams: Team[];

  player: Player = {
    name: 'Nacho',
    age: 19,
    nickname: 'Felino',
    picture: 'imagen.jpg',
    position: 'Foward',
    status: false,
  };

  step = 0;

  constructor() {}

  ngOnInit() {
    this.name = 'Felinos';

    this.players = PLAYERS as any;
    this.teams = TEAMS as any;
  }

  addPlayer() {
    let player = 'Nacho';
    player = 'Carlos';

    this.player.name = player;
  }

  updateStatus(player: Player, i: number, event: any) {
    player.status = event;
    this.step = i;
  }

  activatePlayer(player: Player) {
    player.status = true;
  }

  showData(i: number) {
    this.step = i;
  }
}
