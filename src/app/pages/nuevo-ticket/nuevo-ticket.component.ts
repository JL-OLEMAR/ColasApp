/* eslint-disable @typescript-eslint/no-floating-promises */
import { Component } from '@angular/core'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styles: []
})
export class NuevoTicketComponent {
  numero: number = 0

  constructor (private readonly wsService: WebsocketService) { }

  // Generar nuevo ticket
  newTicket (): void {
    this.numero++
    // Emitir evento
    this.wsService.newTicket(this.numero)
  }
}
