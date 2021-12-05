/* eslint-disable @typescript-eslint/no-floating-promises,@typescript-eslint/strict-boolean-expressions */
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styles: []
})
export class EscritorioComponent implements OnInit, OnDestroy {
  escritorio: string = ''
  ticket: number = 0

  constructor (
    private readonly wsService: WebsocketService,
    private readonly router: Router
  ) { this.escritorio = window.localStorage.getItem('escritorio') ?? '' }

  ngOnInit (): void {
    !this.escritorio && this.router.navigate(['/home'])
  }

  ngOnDestroy (): void {
    window.localStorage.clear()
  }

  // Emitir evento para atender el siguiente ticket
  siguienteTicket (): void {
    this.wsService.nextTicket(parseInt(this.escritorio))
      .then((ticket: any) => (this.ticket = ticket?.numero))
  }
}
