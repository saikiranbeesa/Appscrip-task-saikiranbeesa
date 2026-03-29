import React, { useState } from 'react';
import styles from './Filter.module.css';

interface FilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
}

const FilterSection: React.FC<{ 
  title: string; 
  options?: string[]; 
  selectedItems?: string[];
  onItemToggle?: (item: string) => void;
  onUnselectAll?: () => void;
}> = ({ title, options, selectedItems = [], onItemToggle, onUnselectAll }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filterSection}>
      <button suppressHydrationWarning className={styles.sectionHeader} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.sectionTitle}>{title}</span>
        {isOpen ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m18 15-6-6-6 6"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6"/></svg>
        )}
      </button>
      <div className={styles.sectionSubtitle}>All</div>
      
      {isOpen && options && (
        <div className={styles.sectionContent}>
          <button className={styles.unselectAll} onClick={onUnselectAll}>Unselect all</button>
          <div className={styles.optionsList}>
            {options.map((opt) => (
              <label key={opt} className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  className={styles.checkboxInput} 
                  checked={selectedItems.includes(opt)}
                  onChange={() => onItemToggle && onItemToggle(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Filter: React.FC<FilterProps> = ({
  selectedCategories,
  onCategoriesChange,
}) => {

  // We only map "Men" -> "men's clothing" and "Women" -> "women's clothing" based on UI.
  // We keep local state for dummy filters so they look clickable.
  const [dummyFilters, setDummyFilters] = useState<string[]>([]);
  
  const handleItemToggle = (uiOption: string, category: 'idealFor' | 'other' = 'other') => {
    if (category === 'idealFor') {
      let apiCategory = '';
      if (uiOption === 'Men') apiCategory = "men's clothing";
      if (uiOption === 'Women') apiCategory = "women's clothing";
      
      if (apiCategory) {
        if (selectedCategories.includes(apiCategory)) {
          onCategoriesChange(selectedCategories.filter(c => c !== apiCategory));
        } else {
          onCategoriesChange([...selectedCategories, apiCategory]);
        }
      } else {
        // UI toggle for 'Baby & Kids' which isn't in API
        if (dummyFilters.includes(uiOption)) {
          setDummyFilters(dummyFilters.filter(d => d !== uiOption));
        } else {
          setDummyFilters([...dummyFilters, uiOption]);
        }
      }
    } else {
      if (dummyFilters.includes(uiOption)) {
        setDummyFilters(dummyFilters.filter(d => d !== uiOption));
      } else {
        setDummyFilters([...dummyFilters, uiOption]);
      }
    }
  };

  const getIdealForSelected = () => {
    const selected = [];
    if (selectedCategories.includes("men's clothing")) selected.push("Men");
    if (selectedCategories.includes("women's clothing")) selected.push("Women");
    if (dummyFilters.includes("Baby & Kids")) selected.push("Baby & Kids");
    return selected;
  };

  return (
    <aside className={styles.filterContainer}>
      <div className={styles.filterSidebar}>
        
        <label className={styles.customizableLabel}>
          <input type="checkbox" className={styles.checkboxInput} />
          <span className={styles.customizableText}>CUSTOMIZBLE</span>
        </label>

        <FilterSection 
          title="IDEAL FOR" 
          options={['Men', 'Women', 'Baby & Kids']} 
          selectedItems={getIdealForSelected()}
          onItemToggle={(item) => handleItemToggle(item, 'idealFor')}
          onUnselectAll={() => {
            onCategoriesChange(selectedCategories.filter(c => c !== "men's clothing" && c !== "women's clothing"));
            setDummyFilters(dummyFilters.filter(d => d !== "Baby & Kids"));
          }}
        />
        
        <FilterSection 
          title="OCCASION" 
          options={['Casual', 'Formal']} 
          selectedItems={dummyFilters}
          onItemToggle={(item) => handleItemToggle(item, 'other')}
          onUnselectAll={() => setDummyFilters(dummyFilters.filter(c => c !== 'Casual' && c !== 'Formal'))}
        />
        
        <FilterSection 
          title="WORK" 
          options={['Office', 'Field']} 
          selectedItems={dummyFilters}
          onItemToggle={(item) => handleItemToggle(item, 'other')}
          onUnselectAll={() => setDummyFilters(dummyFilters.filter(c => c !== 'Office' && c !== 'Field'))}
        />
        <FilterSection 
          title="FABRIC" 
          options={['Cotton', 'Silk']} 
          selectedItems={dummyFilters}
          onItemToggle={(item) => handleItemToggle(item, 'other')}
          onUnselectAll={() => setDummyFilters(dummyFilters.filter(c => c !== 'Cotton' && c !== 'Silk'))}
        />
        <FilterSection 
          title="SEGMENT" 
          options={['Luxury', 'Mass']} 
          selectedItems={dummyFilters}
          onItemToggle={(item) => handleItemToggle(item, 'other')}
          onUnselectAll={() => setDummyFilters(dummyFilters.filter(c => c !== 'Luxury' && c !== 'Mass'))}
        />
        <FilterSection 
          title="SUITABLE FOR" 
          options={['Summer', 'Winter']} 
          selectedItems={dummyFilters}
          onItemToggle={(item) => handleItemToggle(item, 'other')}
          onUnselectAll={() => setDummyFilters(dummyFilters.filter(c => c !== 'Summer' && c !== 'Winter'))}
        />
        <FilterSection 
          title="RAW MATERIALS" 
          options={['Leather', 'Wool']} 
          selectedItems={dummyFilters}
          onItemToggle={(item) => handleItemToggle(item, 'other')}
          onUnselectAll={() => setDummyFilters(dummyFilters.filter(c => c !== 'Leather' && c !== 'Wool'))}
        />
        <FilterSection 
          title="PATTERN" 
          options={['Solid', 'Striped']} 
          selectedItems={dummyFilters}
          onItemToggle={(item) => handleItemToggle(item, 'other')}
          onUnselectAll={() => setDummyFilters(dummyFilters.filter(c => c !== 'Solid' && c !== 'Striped'))}
        />

      </div>
    </aside>
  );
};
