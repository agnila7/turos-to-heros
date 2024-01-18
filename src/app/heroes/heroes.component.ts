import { Component } from '@angular/core'; 
// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
import { Hero } from '../heros'; // Return to the HeroesComponent class and import the Hero interface.

@Component({
  // @Component is a decorator function that specifies the Angular metadata for the component. ng generate created three metadata properties:
  selector: 'app-heroes', //The component's CSS element selector.
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html', // The location of the component's template file.
  styleUrl: './heroes.component.css'  //The location of the component's private CSS styles.
  
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
// Always export the component class so you can import it elsewhere … like in the AppModule.