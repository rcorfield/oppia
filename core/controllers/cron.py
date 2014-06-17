# Copyright 2014 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Controllers for the cron jobs."""

from core.controllers import base
from core import jobs_registry


class StatisticsHandler(base.BaseHandler):
    """Handler for statistics cron job."""

    def get(self):
        """Handles GET requests."""
        for klass in jobs_registry.JOB_MANAGER_CLASSES:
             if klass.__name__ == 'StatisticsPageJobManager':
                 klass.enqueue(klass.create_new())
                 break
