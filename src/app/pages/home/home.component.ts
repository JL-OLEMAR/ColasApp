/* eslint-disable @typescript-eslint/strict-boolean-expressions, no-useless-return, @typescript-eslint/no-floating-promises */
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor (private readonly router: Router) { }

  ngOnInit (): void {
  }

  entrar (numero: string): void {
    if (!numero) { return }
    this.router.navigate(['/escritorio', numero])
  }
}
