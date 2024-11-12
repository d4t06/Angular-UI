### use cli
- ng generate component button


### difference from react
- using cli
- Angular create additional layer stand for the component like: `<custom-button>`
- a component make from .component.html, .component.ts, .component.css
- `<ng-content>` stand for children props
- `<ng-template #unique-name>` for fragment
- *ngIf="true: else #showItem" 
- bind attr using `[checked]`

### update 18/6/2024

```
<ng-template #projected>
  <ng-content/>
</ng-template>

<div *ngIf="template === '1'">
  <ng-container *ngTemplateOutlet="projected" />
</div>

<div *ngIf="template === '2'">
  <ng-container *ngTemplateOutlet="projected" />
</div>
```

