/* eslint-disable @typescript-eslint/no-floating-promises */
import { Component, OnInit } from '@angular/core'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styles: []
})
export class PublicoComponent implements OnInit {
  resp: Object[] = []
  lastThreeTickets: any[] = [0, 0, 0]
  lastTicket: any[] = [0]

  constructor (private readonly wsService: WebsocketService) { this.ultimos4Tickets() }

  ngOnInit (): void {
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove('container')
  }

  // Recibir el evento ticket-asignado
  ultimos4Tickets (): void {
    this.wsService.listen('ticket-asignado').subscribe((data: any) => {
      this.resp = data
      this.lastThreeTickets = this.resp.slice(1, 4)
      this.lastTicket = this.resp.slice(0, 1)
    })
  }
}
