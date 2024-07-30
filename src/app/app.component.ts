import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { PipeComponent } from './components/pipe/pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
