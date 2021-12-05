/* eslint-disable  @typescript-eslint/no-floating-promises */
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  txtEscritorio: number = 0

  constructor (private readonly router: Router) { }

  entrar (): void {
    if (this.txtEscritorio === 0) { return }
    window.localStorage.setItem('escritorio', this.txtEscritorio.toString())
    this.router.navigate(['/escritorio', this.txtEscritorio])
  }
}
