import t from 'tcomb';

export const Face = t.struct(
  {
    id: t.String,
    x: t.Number,
    y: t.Number,
    rotate: t.Number,
    scale: t.Number,
    type: t.enums.of(['zuckerberg'])
  },
  'Face'
);

export const Faces = t.dict(t.String, Face, 'Faces');
