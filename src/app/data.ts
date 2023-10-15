import { ResourceT, Effect, ShopItem } from "./types";

const SAMPLE_EFFECTS: Effect[] = [
  {
    uid: 'bugs-1',
    targetUid: 'bugs',
    size: -20,
  },
  {
    uid: 'sticks-1',
    targetUid: 'sticks',
    size: -60,
  },
  {
    uid: 'bugs-2',
    targetUid: 'bugs',
    size: 20,
  },
  {
    uid: 'spider-webs-1',
    targetUid: 'spider webs',
    size: -100,
  },
];

export const SHOP_DATA: ShopItem[] = [
  {
    name: 'Item 1',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 2',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 3',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 4',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 5',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 6',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 7',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 8',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 9',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 10',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 11',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 12',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 13',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 14',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 15',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 16',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 17',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 18',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 19',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
  {
    name: 'Item 20',
    price: [ SAMPLE_EFFECTS[0] ],
    effects: [ SAMPLE_EFFECTS[1] ],
  },
];

export const RESOURCE_DATA: ResourceT[] = [
  {
    name: 'bugs',
    quantity: 412.43,
    capacity: 500,
  },
  {
    name: 'sticks',
    quantity: 53.23,
    capacity: 2500,
  }, { name: 'spider webs',
    quantity: 15,
    capacity: 50,
  }, { name: 'iguanas',
    quantity: 2,
    capacity: 2,
  },
  {
    name: 'guitars',
    quantity: 6.2,
    capacity: 15
  },
  {
    name: 'drums',
    quantity: 1.2,
    capacity: 10,
  },
  {
    name: 'sunlight',
    quantity: 345.23,
    capacity: 800,
  },
  {
    name: 'rocks',
    quantity: 1200.23,
    capacity: 4000,
  },
  {
    name: 'mud',
    quantity: 82.12,
    capacity: 210,
  },
  {
    name: 'rain water',
    quantity: 22.13,
    capacity: 75,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
  {
    name: 'sample resource',
    quantity: -1111,
    capacity: 0,
  },
];

export const loremipsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum nisi ipsum, eget ultricies nulla posuere vel. Vestibulum maximus condimentum lorem nec gravida. Donec consectetur elit ultrices posuere rhoncus. Phasellus et dui eros. Vivamus tortor eros, pulvinar ut metus sit amet, euismod porta nibh. Maecenas feugiat purus in turpis suscipit sagittis. Nam id eleifend ipsum.
  Praesent id urna mauris. Proin in cursus mi. Nunc nunc tellus, pellentesque vel bibendum in, egestas sed nisi. Mauris viverra pharetra mollis. Curabitur imperdiet tristique arcu eget varius. Etiam facilisis cursus dui non aliquam. Proin non neque et felis tincidunt fringilla. Nullam aliquet erat vel ex rhoncus congue. Sed id auctor leo. Integer sit amet leo ante. Nulla eget nisl consequat, elementum velit molestie, molestie lacus. Mauris sodales est at fringilla porttitor. Vivamus nec neque eu ante aliquet elementum. Curabitur eleifend, ante quis mollis scelerisque, velit sem faucibus odio, id euismod eros odio sed arcu. Nulla et viverra ex.
  Sed vestibulum, nunc in sodales faucibus, sapien massa tincidunt neque, sed faucibus dolor mi a dui. Quisque commodo laoreet mattis. Ut eleifend, erat sit amet laoreet sodales, dolor turpis finibus lorem, et sagittis purus tellus sed leo. Praesent euismod lectus eu purus mattis dapibus. Nunc sed rutrum eros. Nullam ac tincidunt ante. Aliquam pretium ex congue est vehicula, eleifend dapibus lacus pretium. Nunc a mauris nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit aliquam nisl, nec rhoncus augue lacinia eu. Morbi a quam vel nibh viverra mattis. Aenean cursus mauris maximus consequat mattis.
  Etiam vitae velit at ex condimentum ullamcorper. Donec ac iaculis dui. Sed condimentum eros vitae libero sollicitudin, ac placerat justo sodales. Aliquam nec euismod velit. Nunc mattis metus hendrerit mattis mollis. Nam sit amet ipsum lorem. Pellentesque convallis euismod dolor, vitae euismod lacus accumsan quis. Sed nec posuere leo, vel sodales dolor. Suspendisse ut porttitor risus, in accumsan nulla. Vestibulum vel dignissim orci. Nullam suscipit semper feugiat. Sed rhoncus est dictum lectus ultrices venenatis. Donec eget lacus ut neque pharetra vulputate sed venenatis dui. Aenean nec lacus est.
  Donec dapibus, dolor eget ultricies pharetra, elit urna iaculis libero, sodales rutrum lectus purus ac eros. Praesent hendrerit lacus odio, in fringilla lorem vestibulum pretium. Morbi quam leo, commodo id sem in, facilisis fringilla ex. Mauris mollis luctus lacus, at volutpat ex blandit ornare. Vestibulum a mi a libero ultrices malesuada. Vestibulum tempus egestas nisi, eu viverra ante laoreet ac. Quisque ultricies feugiat ipsum, at laoreet leo aliquam eu. Duis non elementum tellus, quis elementum nunc. Fusce a nunc nisi. Morbi nunc magna, interdum ultricies nibh ac, laoreet cursus lorem. Vestibulum nisl lacus, volutpat at iaculis nec, tempor id orci. Praesent elementum lacinia risus quis accumsan. Maecenas feugiat tristique nunc, et porttitor turpis laoreet eget.
  Vestibulum a tempor felis. Quisque finibus volutpat est eu porta. Sed ligula ante, fermentum sit amet metus non, tristique pulvinar nisi. Praesent non arcu vitae justo tempus maximus quis tempus sem. Aenean condimentum ex sem, sit amet condimentum felis dignissim nec. Morbi dignissim sodales ex, at lobortis nulla posuere nec. Sed ut accumsan dui. Vestibulum gravida velit sit amet sodales tristique. Maecenas sed semper diam, et mollis tortor.
  Mauris imperdiet ligula massa, at egestas sem efficitur ullamcorper. Sed at rhoncus libero. Sed elementum lacinia ligula sed rutrum. In blandit imperdiet interdum. Donec aliquam risus ultrices ante auctor tempor. Integer elementum ullamcorper venenatis. Morbi eget blandit magna, sed vulputate ex. Sed dictum leo eu nunc venenatis mollis. Suspendisse vitae convallis sapien, ac convallis lacus. Cras rutrum ipsum sit amet tristique mattis. Suspendisse potenti. Etiam rutrum lectus ipsum, id tristique risus venenatis id. Nam faucibus sit amet urna ut venenatis. Maecenas posuere, felis sit amet bibendum cursus, nisi augue accumsan mauris, vitae tincidunt ligula urna ac libero.
  Integer scelerisque mollis nulla, eu sodales diam blandit molestie. Mauris odio sem, pretium eget blandit et, molestie sed sem. Vivamus tristique fermentum tempus. Aliquam tincidunt elementum urna vitae eleifend. Nullam mollis, odio non viverra viverra, ligula risus sodales erat, et euismod nulla erat ut sapien. Sed laoreet ut mi ut consequat. Suspendisse ut elementum felis. Ut ullamcorper semper sagittis. Fusce dapibus faucibus nunc. Nam nisl augue, eleifend a enim a, sollicitudin porttitor est. Vestibulum sodales consectetur leo, pretium suscipit urna rhoncus ut. Quisque molestie, tortor consequat luctus ultrices, nunc leo facilisis nisl, id venenatis velit magna id eros. Pellentesque rutrum ut odio id ultricies.
  Duis eu congue eros. Nunc sed nulla eu leo accumsan eleifend eu sit amet lorem. Aenean ut augue in mi hendrerit luctus eu id quam. Sed purus enim, consequat vel massa eget, consectetur ultrices mi. Integer vestibulum, mi blandit pulvinar iaculis, est magna commodo sapien, ac cursus felis turpis et magna. Praesent nec eros at lorem tincidunt rhoncus sed sed nisl. Morbi et pulvinar sapien, vel tempor ipsum. Sed feugiat ligula et suscipit bibendum. Donec blandit sodales lorem. Nunc tincidunt, velit sodales pharetra eleifend, augue mi convallis erat, in hendrerit ipsum dui at orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque posuere nunc eget blandit dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Proin congue consectetur ipsum, ut gravida lectus tristique sed. Fusce sapien purus, laoreet ac tortor non, tempor pharetra nibh. Maecenas eu enim varius ipsum scelerisque rutrum. Donec pellentesque augue a libero tempor finibus. Ut maximus, eros luctus feugiat feugiat, ligula dolor interdum tortor, sed tincidunt elit diam sit amet nibh. Aliquam lacinia, enim eu varius cursus, ex diam aliquet arcu, eget ultrices felis est ac nibh. Vestibulum tempor tortor in nisi mattis porta. Fusce sit amet mauris urna. Nulla egestas sit amet eros in pharetra. Maecenas mattis leo mollis enim suscipit tristique.
  Nunc pellentesque libero in elementum lacinia. Quisque non ultrices lectus, eget hendrerit enim. Donec convallis augue dictum nulla efficitur bibendum. Nunc nec libero ac arcu elementum malesuada in vitae eros. Quisque molestie semper magna vel sodales. Phasellus fringilla euismod ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere, urna vel sodales consequat, lacus ligula tempor velit, in mattis tellus felis vel nisi. Fusce mi quam, venenatis sed consectetur sed, auctor quis libero. Morbi lacinia, lectus non molestie rhoncus, turpis enim vestibulum mauris, et ultricies nisl elit non diam. Sed libero risus, lacinia at ex volutpat, scelerisque dapibus ipsum. Morbi finibus nulla sed nisi tempus lacinia.
  Nam dignissim mi vel pretium imperdiet. Ut tincidunt risus at libero molestie fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id tempor orci. Etiam mattis suscipit rutrum. Nunc rutrum bibendum mauris vitae semper. Integer quam neque, varius id quam nec, condimentum ultrices libero. Donec ac pulvinar dui. Sed id odio porttitor, fringilla augue eu, pretium arcu. In nec aliquet mi, id venenatis tellus. Nunc lacus enim, elementum non ultricies nec, tempus eget eros. Suspendisse potenti. Nulla accumsan nibh ac neque fermentum sagittis. Nunc non mauris et mauris facilisis laoreet. Curabitur ac purus vitae erat egestas euismod.
  Duis turpis diam, rutrum ut sem a, luctus venenatis dui. Nulla vestibulum turpis porttitor faucibus mollis. Mauris blandit mi ut mauris egestas accumsan. Etiam posuere eget magna a pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod magna est. In id enim quis lectus consectetur volutpat. Vivamus et ultrices nisi. Sed mollis diam nisi, ut efficitur nulla finibus vitae. Quisque nec orci condimentum, sagittis tortor id, semper tellus. Vivamus fringilla nisl imperdiet rhoncus vestibulum. Aliquam commodo vel ligula in feugiat. Nunc ut feugiat mi, eget consectetur elit.
  Morbi posuere mauris egestas, consectetur ipsum nec, venenatis tortor. Etiam finibus tellus eu venenatis pulvinar. Curabitur vel nisi erat. Sed vel tellus a lacus finibus pharetra. Integer vitae nunc felis. Nulla id orci vel urna pellentesque imperdiet. Sed consequat, ipsum nec cursus suscipit, metus felis semper felis, non imperdiet libero felis in dolor. Phasellus condimentum convallis massa eget posuere. Integer maximus, nibh finibus ornare convallis, risus nulla luctus ligula, a tincidunt orci sapien eget leo. Mauris dapibus efficitur massa quis vestibulum. Nulla et lacinia odio, a accumsan diam. Proin quis ante iaculis nisl euismod vestibulum a nec tellus. Sed luctus, justo congue vestibulum ornare, lectus felis semper tortor, id porta mauris justo sit amet elit. Nulla et fermentum metus.
  Nulla lacus ex, viverra a dui vitae, posuere maximus est. Nullam vehicula leo vel velit venenatis condimentum. Nunc elementum, leo quis imperdiet euismod, felis orci auctor tortor, vitae gravida dolor nunc ut est. Curabitur elementum nulla a bibendum dictum. Donec dictum vulputate libero, nec sodales neque consequat in. Sed lacinia varius fringilla. In a sem metus. Donec nec nulla vel est accumsan maximus vel nec velit. Fusce id velit non erat commodo posuere. Curabitur a magna accumsan leo rhoncus ultrices vitae et ipsum. Suspendisse potenti.
  Nunc eu ultrices est, et varius urna. Proin non faucibus tellus. Phasellus blandit sagittis felis vitae eleifend. Etiam congue neque vitae turpis vulputate, a sodales quam sodales. Etiam bibendum mi vel felis egestas accumsan. Etiam dignissim vestibulum felis non lobortis. Nullam tempor nisl quis dui tincidunt iaculis. Nulla fringilla, magna nec consequat efficitur, mi lacus ornare est, nec pellentesque orci diam in urna. Vestibulum feugiat in tellus ac mollis. Nam accumsan nunc vel leo lobortis mattis. Suspendisse porta commodo nunc sed fermentum.
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a magna sed nibh ornare malesuada eu non lectus. Aliquam volutpat libero at lacus sollicitudin ullamcorper et eget orci. Maecenas finibus congue pellentesque. Morbi ac est suscipit, ultrices lectus ut, sollicitudin ipsum. Nulla semper elit id tortor commodo lobortis. Duis fermentum, odio eu auctor lacinia, tellus tellus mattis lacus, non congue libero diam a nibh. Donec tincidunt fermentum elit non consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac imperdiet nisl, ut varius mi. Etiam vestibulum sodales aliquam. Sed euismod tristique nisi ac faucibus. Vestibulum nec urna ac metus commodo mollis ac eu nulla. Nunc elementum, sem ut feugiat semper, ligula sapien iaculis nunc, sit amet tristique orci odio a ipsum. Praesent lorem mauris, eleifend at scelerisque ac, lobortis nec ligula.
  Aenean ipsum erat, lobortis condimentum quam volutpat, pretium consectetur mauris. Donec id tortor tristique, vulputate enim at, gravida dolor. Mauris interdum congue lorem, et interdum lectus pharetra sed. Suspendisse mattis porta massa. Phasellus ut mattis turpis. Donec pretium augue molestie est consectetur, sit amet vehicula elit gravida. Nunc molestie volutpat neque. Donec sollicitudin gravida vulputate. Sed cursus, nulla in dictum gravida, ante nisl fringilla justo, a posuere quam sapien feugiat nunc. Phasellus vel nisl velit. Nullam eget lobortis nisl, a volutpat erat. In luctus diam vel tortor elementum, suscipit ultrices lectus gravida.
  Sed sem dui, consequat in purus ut, imperdiet condimentum dolor. Duis vitae eros nec diam facilisis tempor. Duis hendrerit sapien eu ullamcorper mollis. Etiam ac porttitor felis. Nam vulputate placerat mattis. Praesent faucibus efficitur lectus, vitae interdum metus commodo in. Vestibulum nec egestas mi, id lacinia urna. Ut volutpat dolor quis elit suscipit, ac bibendum orci ornare. Sed sed nisi semper, vestibulum ex nec, vehicula lectus. Sed fermentum justo ac ullamcorper viverra. Pellentesque posuere eget tortor eget condimentum. Morbi euismod scelerisque semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Pellentesque vestibulum tincidunt tortor. Suspendisse et nunc ac leo consequat porttitor et vitae risus. Suspendisse venenatis justo neque, vitae venenatis ipsum interdum at. Praesent tincidunt sem nec lectus euismod, eu eleifend metus vehicula. Sed lobortis felis eu rutrum mollis. Aliquam tincidunt nulla sed imperdiet lacinia. Sed dui eros, aliquam ut vestibulum eget, interdum at augue. Ut finibus id lorem sit amet sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc quis diam eros. Praesent vestibulum nibh lacus,`;
