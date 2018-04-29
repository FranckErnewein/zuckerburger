import t from 'tcomb';

console.log(t.Number);

export const Face = t.struct(
  {
    id: t.String,
    x: t.Number,
    y: t.Number,
    rotate: t.Number,
    scale: t.Number,
    type: t.String
  },
  'Face'
);

export const Faces = t.dict(t.String, Face, 'Faces');
