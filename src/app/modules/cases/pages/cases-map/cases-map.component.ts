import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-cases-map',
  templateUrl: './cases-map.component.html',
  styleUrls: ['./cases-map.component.scss']
})
export class CasesMapComponent implements OnInit {

  public strSeparator = (str: string, length: number) => str.trim().length > length ? `${str.substr(0, length)}...` : str;

  constructor(public casesService: CasesService) { }

  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 49.441355;
  lng: number = 32.064330;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [];

  loadMapCases() {

    this.casesService.getMapCases().subscribe((data: marker[]) => {
      this.markers = this.markers.concat(data['results']);
    })

  }

  ngOnInit(): void {
    this.loadMapCases();
  }

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
