import React, { useState } from 'react';

export default function GalleryExplorer({ folders }) {
  const [activeFolder, setActiveFolder] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const folderList = Object.values(folders || {}).sort((a, b) => (a.sortIndex || 0) - (b.sortIndex || 0));
  
  // Flatten all media for the 'all' view
  let allMedia = [];
  folderList.forEach(f => {
    const photos = (f.photos || []).map(p => ({ ...p, type: 'photo', folderName: f.name }));
    const videos = (f.videos || []).map(v => ({ ...v, type: 'video', folderName: f.name }));
    allMedia.push(...photos, ...videos);
  });
  allMedia.sort((a, b) => (a.sortIndex || 0) - (b.sortIndex || 0));

  const filteredMedia = activeFolder === 'all' 
    ? allMedia 
    : [
        ...(folders[activeFolder]?.photos || []).map(p => ({ ...p, type: 'photo', folderName: folders[activeFolder].name })),
        ...(folders[activeFolder]?.videos || []).map(v => ({ ...v, type: 'video', folderName: folders[activeFolder].name }))
      ].sort((a, b) => (a.sortIndex || 0) - (b.sortIndex || 0));

  return (
    <div className="flex flex-col gap-8">
      {/* Folder Tabs Navigation */}
      <div className="flex gap-2 flex-wrap items-center justify-center sm:justify-start border-b border-[color:var(--line)] pb-4">
        <button 
          onClick={() => setActiveFolder('all')}
          className={`v3-button px-5 py-2 text-xs font-bold transition-all duration-200 ${
            activeFolder === 'all' 
              ? 'bg-[color:var(--deep-pool)] text-white' 
              : 'border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--muted)] hover:bg-white hover:text-[color:var(--deep-pool)]'
          }`}
        >
          All Media ({allMedia.length})
        </button>
        {folderList.map(f => (
          <button 
            key={f.id}
            onClick={() => setActiveFolder(f.id)}
            className={`v3-button px-5 py-2 text-xs font-bold transition-all duration-200 ${
              activeFolder === f.id 
                ? 'bg-[color:var(--deep-pool)] text-white' 
                : 'border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--muted)] hover:bg-white hover:text-[color:var(--deep-pool)]'
            }`}
          >
            {f.name} ({(f.photos || []).length + (f.videos || []).length})
          </button>
        ))}
      </div>

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-[color:var(--line)] rounded-xl text-[color:var(--muted)]">
          No media files in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMedia.map((item, idx) => (
            <div 
              key={item.id || idx}
              onClick={() => setSelectedItem(item)}
              className="v3-card group cursor-pointer overflow-hidden transition-shadow relative aspect-[4/3] flex flex-col justify-end"
            >
              {item.type === 'video' ? (
                <div className="w-full h-full relative bg-black flex items-center justify-center">
                  <video src={item.url} className="w-full h-full object-cover opacity-80" muted playsInline preload="metadata" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <span className="w-12 h-12 bg-[color:var(--deep-pool)]/90 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">▶</span>
                  </div>
                </div>
              ) : (
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              )}
              {/* Overlay with info */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--ink)]/90 via-[color:var(--ink)]/50 to-transparent p-4 flex flex-col justify-end text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p className="text-[10px] font-bold text-[color:var(--gold)] uppercase">{item.folderName}</p>
                <h4 className="font-display font-bold text-base leading-tight mt-0.5">{item.title}</h4>
                {item.caption && <p className="text-[10px] text-stone-300 mt-1 line-clamp-1">{item.caption}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-[color:var(--ink)]/95 flex flex-col justify-between p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="flex justify-between items-center text-white h-12">
            <div>
              <p className="text-[10px] uppercase font-bold text-[color:var(--gold)]">{selectedItem.folderName}</p>
              <h4 className="font-display font-bold text-lg">{selectedItem.title}</h4>
            </div>
            <button 
              onClick={() => setSelectedItem(null)}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[color:var(--line)] text-lg hover:bg-[color:var(--deep-pool)] text-white font-bold"
            >
              ✕
            </button>
          </div>

          <div 
            className="flex-grow flex items-center justify-center max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <video src={selectedItem.url} controls autoPlay className="max-w-full max-h-full rounded-lg bg-black shadow-lg" />
            ) : (
              <img src={selectedItem.url} alt={selectedItem.title} className="max-w-full max-h-full rounded-lg object-contain bg-stone-900 shadow-lg" />
            )}
          </div>

          <div className="text-center text-white h-12 flex items-center justify-center">
            <p className="text-xs text-stone-300">{selectedItem.caption || 'No caption available'}</p>
          </div>
        </div>
      )}
    </div>
  );
}
