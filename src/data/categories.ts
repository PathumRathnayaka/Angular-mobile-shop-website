import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'building-materials',
    name: 'Building Materials',
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'aluminium', name: 'Aluminium', imageUrl: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'blocks', name: 'Blocks', imageUrl: 'https://images.pexels.com/photos/3334360/pexels-photo-3334360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'cement-concrete', name: 'Cement & Concrete', imageUrl: 'https://images.pexels.com/photos/2092078/pexels-photo-2092078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'chemical', name: 'Chemical', imageUrl: 'https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'insulation', name: 'Insulation', imageUrl: 'https://images.pexels.com/photos/7108263/pexels-photo-7108263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id: 'paint', name: 'Paint', imageUrl: 'https://images.pexels.com/photos/6858662/pexels-photo-6858662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id: 'panels-partitions', name: 'Panels & Partitions', imageUrl: 'https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id: 'sealant-adhesive', name: 'Sealant & Adhesive', imageUrl: 'https://images.pexels.com/photos/5691677/pexels-photo-5691677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id: 'steel-items', name: 'Steel Items', imageUrl: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id: 'tiles', name: 'Tiles', imageUrl: 'https://images.pexels.com/photos/5857873/pexels-photo-5857873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id: 'timber', name: 'Timber', imageUrl: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      { id: 'waterproofing', name: 'Waterproofing', imageUrl: 'https://images.pexels.com/photos/5691564/pexels-photo-5691564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
    ],
  },
  {
    id: 'doors-windows',
    name: 'Doors & Windows',
    imageUrl: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'locks-handles', name: 'Locks & Handles', imageUrl: 'https://images.pexels.com/photos/4491014/pexels-photo-4491014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'door-window-accessories', name: 'Door Window Accessories', imageUrl: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'door-sashes', name: 'Door Sashes', imageUrl: 'https://images.pexels.com/photos/369598/pexels-photo-369598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'fire-rated', name: 'Fire Rated', imageUrl: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7PLNJUcxMRuKi1Gn5X6PZc2Jobj3AbzZog&s',
    subcategories: [
      { id: 'wires-cables', name: 'Wires & Cables', imageUrl: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'electrical-switches-sockets', name: 'Electrical Switches & Sockets', imageUrl: 'https://images.pexels.com/photos/5260554/pexels-photo-5260554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'distribution-boards', name: 'Distribution Boards & Circuit Protection', imageUrl: 'https://images.pexels.com/photos/1603884/pexels-photo-1603884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'lighting', name: 'Lighting', imageUrl: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'electrical-accessories', name: 'Electrical Accessories', imageUrl: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'smart-low-voltage-systems', name: 'Smart and Low Voltage Systems', imageUrl: 'https://images.pexels.com/photos/14616881/pexels-photo-14616881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'home-appliances', name: 'Home Appliances', imageUrl: 'https://images.pexels.com/photos/3637723/pexels-photo-3637723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'flooring',
    name: 'Flooring',
    imageUrl: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'carpets', name: 'Carpets', imageUrl: 'https://images.pexels.com/photos/5816363/pexels-photo-5816363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'epoxy-flooring', name: 'Epoxy Flooring', imageUrl: 'https://images.pexels.com/photos/5824635/pexels-photo-5824635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'industrial-flooring', name: 'Industrial Flooring', imageUrl: 'https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'outdoor-decking', name: 'Outdoor Decking', imageUrl: 'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'rendered-flooring', name: 'Rendered Flooring', imageUrl: 'https://images.pexels.com/photos/3014826/pexels-photo-3014826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'titanium-flooring', name: 'Titanium Flooring', imageUrl: 'https://images.pexels.com/photos/5706238/pexels-photo-5706238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'vinyl-flooring', name: 'Vinyl Flooring', imageUrl: 'https://images.pexels.com/photos/6509175/pexels-photo-6509175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'wood-flooring', name: 'Wood Flooring', imageUrl: 'https://images.pexels.com/photos/260046/pexels-photo-260046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'furniture',
    name: 'Furniture',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'living-room', name: 'Living Room', imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'bedroom', name: 'Bedroom', imageUrl: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'dining-room', name: 'Dining Room', imageUrl: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'home-office', name: 'Home Office', imageUrl: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'office-furniture', name: 'Office Furniture', imageUrl: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'storage-furniture', name: 'Storage Furniture', imageUrl: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    imageUrl: 'https://images.pexels.com/photos/5974327/pexels-photo-5974327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'nails', name: 'Nails', imageUrl: 'https://images.pexels.com/photos/6996365/pexels-photo-6996365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'nuts-bolts', name: 'Nuts & Bolts', imageUrl: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'plugs-anchors', name: 'Plugs & Anchors', imageUrl: 'https://images.pexels.com/photos/7789158/pexels-photo-7789158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'screws', name: 'Screws', imageUrl: 'https://images.pexels.com/photos/6996146/pexels-photo-6996146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'kitchen-bathroom',
    name: 'Kitchen & Bathroom',
    imageUrl: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'sanitary-ware', name: 'Sanitary Ware', imageUrl: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'faucets-taps', name: 'Faucets and Taps', imageUrl: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'sinks', name: 'Sinks', imageUrl: 'https://images.pexels.com/photos/6444366/pexels-photo-6444366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'bathroom-accessories', name: 'Bathroom Accessories', imageUrl: 'https://images.pexels.com/photos/4210311/pexels-photo-4210311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'showers-bathtubs', name: 'Showers and Bathtubs', imageUrl: 'https://images.pexels.com/photos/7534794/pexels-photo-7534794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'cabinetry-vanities', name: 'Cabinetry & Vanities', imageUrl: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'countertops', name: 'Countertops', imageUrl: 'https://images.pexels.com/photos/6908458/pexels-photo-6908458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'ventilation-exhaust', name: 'Ventilation & Exhaust Systems', imageUrl: 'https://images.pexels.com/photos/6908583/pexels-photo-6908583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'water-heating', name: 'Water Heating Systems', imageUrl: 'https://images.pexels.com/photos/5824598/pexels-photo-5824598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXpD3tLwC9BiLRZR83eErNo4bcGZkjvkYbg&s',
    subcategories: [
      { id: 'conduits-casings', name: 'Conduits & Casings', imageUrl: 'https://images.pexels.com/photos/4114905/pexels-photo-4114905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'fire-suppression', name: 'Fire Suppression Equipment', imageUrl: 'https://images.pexels.com/photos/4226777/pexels-photo-4226777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'plumbing-valves', name: 'Plumbing Valves & Accessories', imageUrl: 'https://images.pexels.com/photos/4115011/pexels-photo-4115011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'pipe-fittings', name: 'Pipe Fittings', imageUrl: 'https://images.pexels.com/photos/4115028/pexels-photo-4115028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'ppr-pipes', name: 'PPR Pipes & Fittings', imageUrl: 'https://images.pexels.com/photos/6823642/pexels-photo-6823642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'water-pumps', name: 'Water Pumps', imageUrl: 'https://images.pexels.com/photos/3846188/pexels-photo-3846188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'pvc-pipes', name: 'PVC & Other Pipes', imageUrl: 'https://images.pexels.com/photos/6823632/pexels-photo-6823632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'septic-sewage', name: 'Septic & Sewage', imageUrl: 'https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'water-filtration', name: 'Water Filtration', imageUrl: 'https://images.pexels.com/photos/6908458/pexels-photo-6908458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'water-tanks', name: 'Water Tanks & Storage', imageUrl: 'https://images.pexels.com/photos/3823546/pexels-photo-3823546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'roofing-ceiling',
    name: 'Roofing & Ceiling',
    imageUrl: 'https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'roofing-accessories', name: 'Roofing Accessories', imageUrl: 'https://images.pexels.com/photos/4947140/pexels-photo-4947140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'roofing-sheets', name: 'Roofing Sheets', imageUrl: 'https://images.pexels.com/photos/5825583/pexels-photo-5825583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'roof-tiles', name: 'Roof Tiles', imageUrl: 'https://images.pexels.com/photos/259614/pexels-photo-259614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'ceiling-tiles', name: 'Ceiling Tiles', imageUrl: 'https://images.pexels.com/photos/4058119/pexels-photo-4058119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
  {
    id: 'tools-equipment',
    name: 'Tools & Equipment',
    imageUrl: 'https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    subcategories: [
      { id: 'automotive', name: 'Automotive', imageUrl: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'hand-tools', name: 'Hand Tools', imageUrl: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'masonry-tools', name: 'Masonry Tools', imageUrl: 'https://images.pexels.com/photos/6422779/pexels-photo-6422779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'measuring-equipment', name: 'Measuring Equipment', imageUrl: 'https://images.pexels.com/photos/4491896/pexels-photo-4491896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'power-tools', name: 'Power Tools', imageUrl: 'https://images.pexels.com/photos/4116201/pexels-photo-4116201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'safety-equipment', name: 'Safety Equipment', imageUrl: 'https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'scaffolding', name: 'Scaffolding', imageUrl: 'https://images.pexels.com/photos/3932867/pexels-photo-3932867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'welding-equipment', name: 'Welding Equipment', imageUrl: 'https://images.pexels.com/photos/4491344/pexels-photo-4491344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'lifting-equipment', name: 'Lifting Equipment', imageUrl: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { id: 'landscape-external', name: 'Landscape & External Works', imageUrl: 'https://images.pexels.com/photos/4484186/pexels-photo-4484186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ],
  },
];

export const getCategory = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};