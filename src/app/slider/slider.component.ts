import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit, OnDestroy {
  // Array of images for the slider
  public images: string[] = [
    'bilder-und-icons/sw.png', // Example images (update these paths)
    'bilder-und-icons/sw@2x.png',
    'bilder-und-icons/sw@3x.png',
  ];

  public currentImageIndex: number = 0;

  private imageChangeInterval: any;

  public ngOnInit() {
    this.startAutoSlide();
  }

  public ngOnDestroy() {
    if (this.imageChangeInterval) {
      clearInterval(this.imageChangeInterval);
    }
  }

  public startAutoSlide() {
    this.imageChangeInterval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  public nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  public prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
