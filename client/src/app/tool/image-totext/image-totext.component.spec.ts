import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTOtextComponent } from './image-totext.component';

describe('ImageTOtextComponent', () => {
  let component: ImageTOtextComponent;
  let fixture: ComponentFixture<ImageTOtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTOtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTOtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
