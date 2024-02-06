import { Component, OnInit } from '@angular/core';

interface Room {
  title: string;
  image: string;
  cost: number;
  amenities: string[];
  description: string;
}


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  rooms: Room[] = [
    {
      title: 'Standard Room',
      image: '/assets/Standard.png',
      cost: 100,
      amenities: ['Free Wi-Fi', 'TV', 'Air Conditioning'],
      description: 'A comfortable standard room with basic amenities.'
    },
    {
      title: 'Deluxe Room',
      image: '/assets/Deluxe.jpg',
      cost: 150,
      amenities: ['Free Wi-Fi', 'TV', 'Air Conditioning', 'Mini-Bar'],
      description: 'An upgraded room with additional amenities for a luxurious stay.'
    },
    {
      title: 'Suite',
      image: '/assets/Suite.png',
      cost: 200,
      amenities: ['Free Wi-Fi', 'TV', 'Air Conditioning', 'Mini-Bar', 'Private Jacuzzi'],
      description: 'A spacious suite with premium amenities for a luxurious experience.'
    },
    {
      title: 'Royal',
      image: '/assets/Royal.png',
      cost: 250,
      amenities: ['Free Wi-Fi', 'TV', 'Air Conditioning', 'Mini-Bar', 'Private Jacuzzi'],
      description: 'A spacious suite with additional room for guests.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
     setTimeout(() => {
      this.showSuccessPopup();
    }, 250);
  }

  // Method to display success popup
  showSuccessPopup() {
    alert('Please call 302-302-3012 to schedule a booking for this room!');
  }
}