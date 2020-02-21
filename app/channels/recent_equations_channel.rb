class RecentEquationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'recent_equations'
  end
end
