import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToyStoryPage } from './toy-story.page';

describe('ToyStoryPage', () => {
  let component: ToyStoryPage;
  let fixture: ComponentFixture<ToyStoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyStoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToyStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
