import { ListaPokemonService } from './../../services/lista-pokemon.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-dex',
  templateUrl: './home-dex.component.html',
  styleUrls: ['./home-dex.component.scss']
})
export class HomeDexComponent implements OnInit {

  pokeInfo: any;
  pokeAbilits;
  pokeImage;
  name = new FormControl('');

  constructor(
    private listaPokemon: ListaPokemonService
  ) { }

  ngOnInit(): void {
  }

  getPoke() {
    this.listaPokemon.getPokemon(this.name.value)
      .subscribe( poke => {
        console.log(poke);
        this.pokeImage = poke.sprites.front_default;
        console.log(this.pokeImage);
        this.pokeAbilits = poke.abilities;
        console.log(this.pokeAbilits);
        this.pokeInfo = poke.name;
      });
  }

}
