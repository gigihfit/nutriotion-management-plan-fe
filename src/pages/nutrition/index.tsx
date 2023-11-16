import { Card, List, TabBar } from 'antd-mobile';
import layout from '../../components/hocs/layout';
import { IoHomeOutline, IoFastFoodOutline } from 'react-icons/io5';
import { MdSportsVolleyball, MdAccountBox } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const NutritionRecommendationPage = () => {
  const navigate = useNavigate();
  const nutritionRecommendations = [
    {
      title: 'Salmon Salad',
      description: 'Rich in Omega-3 fatty acids and protein.',
      nutrients: 'Protein, Omega-3',
    },
    {
      title: 'Quinoa Bowl',
      description: 'Packed with fiber, vitamins, and minerals.',
      nutrients: 'Fiber, Vitamins, Minerals',
    },
    {
      title: 'Mixed Berry Smoothie',
      description: 'Antioxidant-rich and high in vitamins.',
      nutrients: 'Antioxidants, Vitamins',
    },
  ];

  const tabs = [
    { key: 'home', title: 'Home', icon: <IoHomeOutline /> },
    { key: 'exercise', title: 'Exercise', icon: <MdSportsVolleyball /> },
    {
      key: 'nutrition',
      title: 'Nutrition',
      icon: <IoFastFoodOutline />,
      selected: true,
    },
    { key: 'account', title: 'Account', icon: <MdAccountBox /> },
  ];

  const handleTab = (tab: string) => {
    navigate(`/${tab}`);
  };

  return (
    <>
      <div className="flex items-center justify-center relative">
        <p className="text-2xl">GIGIH Fit.</p>
      </div>
      <Card>
        <Card>
          <p className="text-center text-4xl">Nutrition Recommendations</p>
          <List>
            {nutritionRecommendations.map((recommendation, index) => (
              <List.Item key={index}>
                <List.Item
                  title={<p className="text-xl">{recommendation.title}</p>}
                  description={
                    <div>
                      <p>{recommendation.description}</p>
                      <p className="text-gray-500">{`Nutrients: ${recommendation.nutrients}`}</p>
                    </div>
                  }
                />
              </List.Item>
            ))}
          </List>
        </Card>
      </Card>
      <TabBar
        className="absolute bottom-0 w-full left-0 outline outline-blue-500"
        onChange={(val) => handleTab(val)}
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            className="mt-2"
          />
        ))}
      </TabBar>
    </>
  );
};

export default layout(NutritionRecommendationPage);
