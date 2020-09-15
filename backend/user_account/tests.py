#test_model
from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from django.urls import reverse

class BaseTest(TestCase):
      def setUp(self):
            backend_url=reverse('admin/')
            self.user={
                'Username':"Username",
                'Password':'Password',
            }
            return super().setUp()

class backendloginTest(BaseTest):
      def test_can_view_page_correctly(self):
            response=self.client.get(self.backend_url)
            self.assertEqual(response.status_code,200)
#test_View
from .test_setup import TestSetUp
# from ..models import User


class TestViews(TestSetUp):
    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)
        # import pdb
        # pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_can_register_correctly(self):
        res = self.client.post(
            self.register_url, self.user_data, format="json")
        self.assertEqual(res.data['email'], self.user_data['email'])
        self.assertEqual(res.data['username'], self.user_data['username'])
        self.assertEqual(res.data['first_name'], self.user_data['first_name'])
        self.assertEqual(res.data['last_name'], self.user_data['last_name'])
        self.assertEqual(res.data['address'], self.user_data['address'])
        self.assertEqual(res.data['phone'], self.user_data['phone'])
        self.assertEqual(res.data['city'], self.user_data['city'])
        self.assertEqual(res.status_code, 201)

    # def test_user_cannot_login_with_unverified_email(self):
    #     self.client.post(
    #         self.register_url, self.user_data, format="json")
    #     res = self.client.post(self.login_url, self.user_data, format="json")
    #     self.assertEqual(res.status_code, 401)

    # def test_user_can_login_after_verification(self):
    #     response = self.client.post(
    #         self.register_url, self.user_data, format="json")
    #     email = response.data['email']
    #     user = User.objects.get(email=email)
    #     user.is_verified = True
    #     user.save()
    #     res = self.client.post(self.login_url, self.user_data, format="json")
    #     self.assertEqual(res.status_code, 200)
