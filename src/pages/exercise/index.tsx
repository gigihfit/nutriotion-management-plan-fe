import { Card, List, TabBar } from 'antd-mobile';
import layout from '../../components/hocs/layout';
import { IoHomeOutline, IoFastFoodOutline } from 'react-icons/io5';
import { MdSportsVolleyball, MdAccountBox } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ExerciseRecommendationPage = () => {
  const navigate = useNavigate();

  const tabs = [
    {
      key: 'home',
      title: 'Home',
      icon: <IoHomeOutline />,
    },
    {
      key: 'exercise',
      title: 'Exercise',
      icon: <MdSportsVolleyball />,
    },
    {
      key: 'nutrition',
      title: 'Nutrition',
      icon: <IoFastFoodOutline />,
    },
    {
      key: 'account',
      title: 'Account',
      icon: <MdAccountBox />,
    },
  ];

  const handleTab = (tab: string) => {
    navigate(`/${tab}`);
  };

  const exerciseRecommendations = [
    {
      title: 'Morning Jogging',
      description: 'Boosts metabolism and improves cardiovascular health.',
    },
    {
      title: 'Bodyweight Training',
      description: 'Strengthens muscles and enhances overall fitness.',
    },
    {
      title: 'Yoga Session',
      description: 'Promotes flexibility, balance, and mental well-being.',
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center relative">
        <p className="text-2xl">GIGIH Fit.</p>
      </div>
      <Card>
        <Card>
          <p className="text-center text-4xl">Exercise Recommendations</p>
          <List>
            {exerciseRecommendations.map((recommendation, index) => (
              <List.Item key={index}>
                <List.Item
                  title={<p className="text-xl">{recommendation.title}</p>}
                  description={<p>{recommendation.description}</p>}
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

export default layout(ExerciseRecommendationPage);
